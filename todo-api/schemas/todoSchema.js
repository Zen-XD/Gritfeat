import z from "zod";

const createTodoSchema = z.object({
    title: z.string().min(1, "Title is required").max(100),
    description: z.string().max(500).optional(),
    completed: z.boolean().optional().default(false),
});

const updateTodoSchema = z.object({
    title: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional(),
    completed: z.boolean().optional(),
});

export { createTodoSchema, updateTodoSchema };
