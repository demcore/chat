const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.get('/', function (req, res, next) {
    Message.find()
        .exec(function(err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(200).json({
                message: 'Saved message',
                data: messages
            });
        });
});

router.post('/', function (req, res, next) {
    const message = new Message({
        content: req.body.content
    });

    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        res.status(201).json({
            message: 'Saved message',
            data: result
        });
    });
});

router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        if (!message) {
            return res.status(500).json({
                title: 'No Message Found',
                data: []
            });
        }

        message.content = req.body.content;
        message.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(201).json({
                message: 'Updated message',
                data: result
            });
        })
    });
});

router.delete('/:id', function (req, res, next) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        if (!message) {
            return res.status(500).json({
                title: 'No Message Found',
                data: []
            });
        }

        message.content = req.body.content;
        message.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(201).json({
                message: 'Deleted message',
                data: result
            });
        })
    });
});



module.exports = router;
