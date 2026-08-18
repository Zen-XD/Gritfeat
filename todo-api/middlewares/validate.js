const validate = (schema) => (req, res, next) => {
    try {
        const parsedBody = schema.parse(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        return res.status(400).json({
            error: "Validation Error",
            details: error.errors,
        });
    }
};

export default validate;
