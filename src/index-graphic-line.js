import Vue from 'vue'
import Chart from 'chart.js';
import GraphicLine from './ea-graphic-line'

//TO-DO investigar como crear la instancia sin necesidad de usar window 
window.graphicLine = new Vue({
  el: '#contentGraphic',
  components: {
    'ea-graphic-line': GraphicLine
  },
  data: {
    options: []
  }
});
