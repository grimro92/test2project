declare module 'vue-virtual-scroller' {
    import { DefineComponent } from 'vue';
    
    export const VirtualScroller: DefineComponent<{
      items: any[];
      itemSize: number;
    }, any, any>;
  
    export default VirtualScroller;
  }
  