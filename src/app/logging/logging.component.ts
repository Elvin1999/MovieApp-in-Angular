import { LoggingService } from './../logging.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
})
export class LoggingComponent implements OnInit {
  constructor(public loggingService: LoggingService) {}

  ngOnInit(): void {}
}
