import request from '@/utils/http'

export default {
  getDashboardData: () => request.get('/dashboard/console'),
}
