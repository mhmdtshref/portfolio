const dbError = (res, error) => {
    res.status(500).json({ success: false, error: error.message });
};

const requestError = (res, error) => {
    res.json({ success: false, error: `Request Error: ${error.message}` });
};

const success = (res, data) => {
    res.json({ success: true, data });
};

module.exports = {
    error: { database: dbError, badRequest: requestError },
    success,
};
