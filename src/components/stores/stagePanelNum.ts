import { defineStore } from 'pinia';

interface StagePanelNumState {
  stagePanelNum: number;
  crtStagePanelNum: number;
}

export const useStagePanelNumState = defineStore('main', {
  state: ():StagePanelNumState => ({
    stagePanelNum: 0,
    crtStagePanelNum: 0,
  }),

  actions: {
    init() {
      console.log("init開始");
      this.crtStagePanelNum = this.stagePanelNum;
    },
    increment() {
      this.stagePanelNum++;
    },
    add() {
      this.stagePanelNum = this.crtStagePanelNum;
    },
    addIncrement() {
      this.stagePanelNum = this.crtStagePanelNum + 1;
    },
    reset() {
      this.stagePanelNum = 0;
    },
  },
});