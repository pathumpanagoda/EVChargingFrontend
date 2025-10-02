import api from './axios'

export const stationsAPI = {
  // Get all active stations
  getStations: async (params = {}) => {
    const response = await api.get('/api/station', { params })
    return response.data
  },

  // Get station by ID
  getStation: async (id) => {
    const response = await api.get(`/api/station/${id}`)
    return response.data
  },

  // Get nearby stations
  getNearbyStations: async (lat, lng) => {
    const response = await api.get('/api/station/nearby', {
      params: { lat, lng }
    })
    return response.data
  },

  // Create new station (Backoffice only)
  createStation: async (stationData) => {
    const response = await api.post('/api/station', stationData)
    return response.data
  },

  // Update station
  updateStation: async (id, stationData) => {
    const response = await api.put(`/api/station/${id}`, stationData)
    return response.data
  },

  // Update station schedule
  updateStationSchedule: async (id, scheduleData) => {
    const response = await api.put(`/api/station/${id}/schedule`, scheduleData)
    return response.data
  },

  // Deactivate station
  deactivateStation: async (id) => {
    const response = await api.delete(`/api/station/${id}`)
    return response.data
  },
}
