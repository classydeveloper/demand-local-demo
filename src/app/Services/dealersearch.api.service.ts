import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AppConfig} from "../app.config";

@Injectable()
export class DealerSearchAPI {

  constructor(private appConfig: AppConfig, private http:Http) {
  }

  getDealersWithinARadiusOfZip(zipCode : number, radius : number = 10.0) {

    console.log("Connecting to Edumunds API" +    this.appConfig.config.edmundsDealerServiceUrl );
    var url = this.appConfig.config.edmundsDealerServiceUrl.replace("ZIP",zipCode+"");
    url = url.replace("RAD",radius+"");
    return this.http.get(url);
  }
}
