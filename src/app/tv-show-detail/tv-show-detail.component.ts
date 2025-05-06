import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from '../service/tv-show.service';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrl: './tv-show-detail.component.css'
})
export class TvShowDetailComponent {
  id!: string;
  constructor(private route: ActivatedRoute, private tvShowService: TvShowService) {}
  show: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    
    this.tvShowService.getShowDetails(this.id).subscribe((data:any[]) => {
      // const details = JSON.parse(data.showDetails);
      console.log(data);
      this.show = data;
      this.show.showDetails = JSON.parse(this.show.showDetails);
    });
  }
}
