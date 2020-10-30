import * as Lettera from 'lettera'

//var apiClient = new Lettera.ApiClient()
//apiClient.basePath = "https://lettera.api.ksfmedia.fi/v2"

Lettera.ApiClient.instance.basePath = 'https://lettera.api.ksfmedia.fi/v2'

let api = new Lettera.ArticlesApi()


export default api