import { Component, OnInit } from '@angular/core';
import { Observable, interval} from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit{

  private sub;
  ngOnInit(){
    
    // Ny observer dia ilay objet manana methode 03 ireo
    // Ary dia lazaina koa hoe surveillance na mpandinika na koa hoe mijery ilay type ny data séquence avoakany Observable
    const observer = {
      next: (item: unknown) => console.log(`Une boite arrivé ${item}`),
      error: (err: unknown) => console.log(`OUps il y une erreur: ${err}`),
      complete: () => console.log('terminé....plus rien')
    };

   // Inty no atao hoe Observale izany hoe séquence na données maro 
   // Tonga amini toerana iray izay tsy mitovy ny fotoana ahatongavany ny tsirairay
    const stream = new Observable(myObserver => {
      myObserver.next('boite 1');
      myObserver.next('boite 2');
      myObserver.error(new Error())
      myObserver.next('boite 3');
      myObserver.complete();
    });
   
  
    const susbscription = stream.subscribe(
      item => console.log(`Une boite arrivé ${item}`),
      err => console.log(`OUps il y une erreur: ${err}`),
      ()  => console.log('terminé....plus rien')
    );

    susbscription.unsubscribe();
    
  }

  /**
   * Start
   */
  public Start(): void  {
   this.sub =  interval(1000).subscribe(
      value => console.log('Ma valeur:' ,value),
      error => console.log(new Error()),
      () => console.log('La sequence se terminé ')
    );
  }

  /**
   * Stop
   */
  public Stop(): void {
    this.sub.unsubscribe();
  }

}
