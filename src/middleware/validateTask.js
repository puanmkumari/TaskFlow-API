const sendResponse = require("../utils/response");

const allowedPriorities = ["low", "medium", "high"];

const validateTask = (req, res, next) => {
  const { title, description, priority, completed } = req.body;

  // Title validation
  if (req.method === "POST") {
    if (!title || typeof title !== "string" || title.trim() === "") {
      return sendResponse(
        res,
        400,
        false,
        "Title is required and must be a non-empty string."
      );
    }
  }

  // Optional fields validation
  if (title !== undefined && typeof title !== "string") {
    return sendResponse(res, 400, false, "Title must be a string.");
  }

  if (description !== undefined && typeof description !== "string") {
    return sendResponse(res, 400, false, "Description must be a string.");
  }

  if (
    priority !== undefined &&
    !allowedPriorities.includes(priority)
  ) {
    return sendResponse(
      res,
      400,
      false,
      "Priority must be one of: low, medium, high."
    );
  }

  if (
    completed !== undefined &&
    typeof completed !== "boolean"
  ) {
    return sendResponse(
      res,
      400,
      false,
      "Completed must be true or false."
    );
  }

  // Sanitization
  if (typeof title === "string") {
    req.body.title = title.trim();
  }

  if (typeof description === "string") {
    req.body.description = description.trim();
  }

  next();
};

module.exports = validateTask;