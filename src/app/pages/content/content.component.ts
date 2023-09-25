import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  pictureContent:string = ''
  titleContent:string = ''
  linkContent:string = ''

  techDescription:string = ''
  functionsDescription:string = ''
  howExecuteDescription:string = ''
  conclusionDescription:string = ''
  private id:string | null = '0'

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id')
    }
    )

    this.setValueToComponent(this.id)
  }

  setValueToComponent = (id:string | null) => {
      const result = fakeData.filter(
                                  article => article.id == id)[0]

      this.titleContent = result.title
      this.pictureContent = result.picture
      this.linkContent = result.linkContent
      this.techDescription = result.techDescription
      this.functionsDescription = result.functionsDescription
      this.howExecuteDescription = result.howExecuteDescription
      this.conclusionDescription = result.conclusionDescription
  }
  

}
