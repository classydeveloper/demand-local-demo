import { Component, EventEmitter, OnInit, ElementRef, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../../app.config';
import {AuthService} from "../../auth/auth.service";
declare let jQuery: any;

@Component({
  selector: '[navbar]',
  templateUrl: './navbar.template.html',
  styles : [`
      .nav-backgroud-color {background-color: #fff; height: 50px;}
    `]
})
export class Navbar implements OnInit {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  @Output() toggleChatEvent: EventEmitter<any> = new EventEmitter();
  $el: any;
  config: any;
  router: Router;

  constructor(el: ElementRef, config: AppConfig, router: Router, private authService:AuthService) {6
    this.$el = jQuery(el.nativeElement);
    this.config = config.getConfig();
    this.router = router;
  }


  toggleSidebar(state): void {
    this.toggleSidebarEvent.emit(state);
  }

  toggleChat(): void {
    this.toggleChatEvent.emit(null);
  }

  onDashboardSearch(f): void {
    this.router.navigate(['/app', 'extra', 'search'], { queryParams: { search: f.value.search } });
  }

  ngOnInit(): void {
    this.$el.find('.input-group-addon + .form-control').on('blur focus', function(e): void {
      jQuery(this).parents('.input-group')
        [e.type === 'focus' ? 'addClass' : 'removeClass']('focus');
    });
  }
}
