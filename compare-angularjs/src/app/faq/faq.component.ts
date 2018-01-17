import { Component, OnInit } from '@angular/core';
import { GetFaqInfoService } from '../get-faq-info.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faqs: Array<any>;

  constructor(private dataService:GetFaqInfoService) { 
    this.dataService.getFaqInfo()
                    .map(response => response.json())
                    .subscribe(res => this.faqs = res);
  }

  ngOnInit() {}
}
