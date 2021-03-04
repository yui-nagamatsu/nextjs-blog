// req = HTTP incoming message, res = HTTP server response
export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
}