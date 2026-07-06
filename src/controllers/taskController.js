const tasks = require("../data/tasks");
const Task = require("../models/taskModel");
const sendResponse = require("../utils/response");

/**
 * GET /api/tasks
 */
const getAllTasks = (req, res) => {
    return sendResponse(
        res,
        200,
        true,
        "Tasks fetched successfully",
        tasks
    );
};

/**
 * GET /api/tasks/:id
 */
const getTaskById = (req, res) => {

    const task = tasks.find(t => t.id === req.params.id);

    if (!task) {
        return sendResponse(
            res,
            404,
            false,
            "Task not found"
        );
    }

    return sendResponse(
        res,
        200,
        true,
        "Task fetched successfully",
        task
    );
};

/**
 * POST /api/tasks
 */
const createTask = (req, res) => {

    const {
        title,
        description,
        priority,
        completed
    } = req.body;

    if (!title || title.trim() === "") {
        return sendResponse(
            res,
            400,
            false,
            "Title is required"
        );
    }

    const newTask = new Task({
        title,
        description,
        priority,
        completed
    });

    tasks.push(newTask);

    return sendResponse(
        res,
        201,
        true,
        "Task created successfully",
        newTask
    );
};

/**
 * PUT /api/tasks/:id
 */
const updateTask = (req, res) => {

    const task = tasks.find(t => t.id === req.params.id);

    if (!task) {
        return sendResponse(
            res,
            404,
            false,
            "Task not found"
        );
    }

    const {
        title,
        description,
        priority,
        completed
    } = req.body;

    if (title !== undefined)
        task.title = title;

    if (description !== undefined)
        task.description = description;

    if (priority !== undefined)
        task.priority = priority;

    if (completed !== undefined)
        task.completed = completed;

    task.updatedAt = new Date().toISOString();

    return sendResponse(
        res,
        200,
        true,
        "Task updated successfully",
        task
    );
};

/**
 * DELETE /api/tasks/:id
 */
const deleteTask = (req, res) => {

    const index = tasks.findIndex(
        t => t.id === req.params.id
    );

    if (index === -1) {

        return sendResponse(
            res,
            404,
            false,
            "Task not found"
        );

    }

    tasks.splice(index, 1);

    return res.status(204).send();
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};