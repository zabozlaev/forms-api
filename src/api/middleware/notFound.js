import HttpError from '../utils/error';

const notFoundHandler = (_, __, next) => next(new HttpError('Not found', 404));

export default notFoundHandler;
