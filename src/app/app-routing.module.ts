import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordFrequencyAnalyzerComponent } from './word-frequency-analyzer/word-frequency-analyzer.component';


const routes: Routes = [
  { path: '', component: WordFrequencyAnalyzerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
