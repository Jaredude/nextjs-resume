import resumedata from '../../resume-data.json';
export default (req, res) => {
    res.status(200).json(resumedata);
}