import { Component, OnInit } from "@angular/core";
import { AppareilService } from "../services/appareil.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-appareil-view",
  templateUrl: "./appareil-view.component.html",
  styleUrls: ["./appareil-view.component.scss"]
})
export class AppareilViewComponent implements OnInit {
  appareilSubscription: Subscription;
  appareils: any[];
  isAuth: boolean = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private appareilService: AppareilService) {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm("Etes vous sûr ?")) this.appareilService.switchOffAll();
    else return null;
  }
  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
}
