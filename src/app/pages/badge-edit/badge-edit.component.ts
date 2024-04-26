import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BadgeEditFormModule } from "../../shared/modules/badge-edit-form/badge-edit-form.module";
import { BadgeService } from '../badges/badges/Services/badge.service';
import { Badge } from '../badges/classes/Badge';

@Component({
  selector: 'app-badge-edit',
  standalone: true,
  templateUrl: './badge-edit.component.html',
  styleUrl: './badge-edit.component.scss',
  imports: [BadgeEditFormModule]
})
export class BadgeEditComponent {
  badge: Badge

  constructor(private route: ActivatedRoute, private badgeService: BadgeService) {
    this.getBadge()
  }
  getBadge() {
    //a komponens inditásakor megnézzuk hogy mi az id, és lekérjuk az id-hoz tartozó badge-et
    //(folytatás a html-ben)
    const badgeId = parseInt(this.route.snapshot.paramMap.get("badgeId"))
    this.badgeService.getBadge(badgeId).subscribe({
      next: (badge) => {
        this.badge = badge
      }
    })
  }
}


