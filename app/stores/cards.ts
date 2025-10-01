import { defineStore } from "pinia";
import { type RitualCard } from "@/shared/types.js";

export const useCardStore = defineStore("card", {
  state: () => ({
    cards: [] as RitualCard[],
  }),
  actions: {
    addCard(card: RitualCard) {
      this.cards.push(card);
      this.saveToLocalStorage();
    },
    deleteCardByName(name: string | undefined) {
      const index = this.cards.findIndex((card) => card.name === name);
      if (index !== -1) {
        this.cards.splice(index, 1);
        this.saveToLocalStorage();
      }
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
