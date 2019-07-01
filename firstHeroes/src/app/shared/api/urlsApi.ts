import { Key } from './key';

export class UrlsApi{
    apiKeyMethod = new Key();

    searchUrlByName: String = 'https://superheroapi.com/api/'+this.apiKeyMethod.getApiKey+'/search/';
    searchUrlById : String = 'https://superheroapi.com/api/'+this.apiKeyMethod.getApiKey+'/';
}