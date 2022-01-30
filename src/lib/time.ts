import moment from 'moment'

export const getTimeLeft = () => moment(moment().endOf('day').diff(moment()))
