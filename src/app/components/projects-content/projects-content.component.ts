import { Component, Input, OnInit, } from '@angular/core';
import { projectsData } from '../../data/projectsData'

@Component({
  selector: 'app-projects-content',
  templateUrl: './projects-content.component.html',
  styleUrls: ['./projects-content.component.css', 'projects-content.components.css']
})
export class ProjectsContentComponent implements OnInit {

  @Input()
  projectLink:string = ''
  @Input()
  projectImage:string = ''
  @Input()
  projectTitle:string = ''
  @Input()
  projectSubtitle:string = ''
  @Input()
  id:(string | null) = '0'

  constructor(
  ) {}

  ngOnInit(): void {

  }

  setValueToProject = (id:string | null) => {
    const result = projectsData.filter(article => article.id == id)[0]    

    this.projectLink = result.link 
    this.projectImage = result.image 
    this.projectTitle = result.title
    this.projectSubtitle = result.subtitle

  }


}
