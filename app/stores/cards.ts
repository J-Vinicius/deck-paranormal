import { defineStore } from "pinia";

type FormaAvancada = {
  description: string;
  custoPE: number;
  preReq: string;
};

export interface RitualCard {
  name: string;
  reference: {
    title: string;
    image: string;
  };
  element: string;
  circle: number;
  execution: string;
  range: string;
  area: string;
  duration: string;
  resistance: string;
  target: string;
  description: string;
  discente: FormaAvancada;
  verdadeira: FormaAvancada;
  fonte: string;
}

export const useCardStore = defineStore("card", {
  state: () => ({
    cards: [] as RitualCard[],
  }),
  actions: {
    addCard(card: RitualCard) {
      this.cards.push(card);
      this.saveToLocalStorage();
    },
    loadFromLocalStorage() {
      const data = localStorage.getItem("ritual-cards");
      if (data) {
        this.cards = JSON.parse(data);
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("ritual-cards", JSON.stringify(this.cards));
    },
  },
});
