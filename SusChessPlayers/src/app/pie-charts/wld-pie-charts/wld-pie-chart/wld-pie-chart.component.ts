import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-wld-pie-chart',
  templateUrl: './wld-pie-chart.component.html',
  styleUrls: ['./wld-pie-chart.component.scss']
})
export class WldPieChartComponent extends PieChartComponent {
  @Output() clickedSection: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.chart.options.onClick = (e, a, c) => {
      if (!a[0]) {
        return;
      }
      console.log("clicked");
      const index = a[0].index;          
      if (index >= 0) {
        const label: string = this.chart.data.labels[index] as string;
        this.clickedSection.emit(label);
      }
    }
  }

}
