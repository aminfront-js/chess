"use strict"
let mainItems = document.querySelectorAll('.main__item')
let container = document.querySelector('.container')

let selectedItem = {}
let columnId = [
    ["item1", "item9", "item17", "item25", "item33", "item41", "item49", "item57"],
    ["item2", "item10", "item18", "item26", "item34", "item42", "item50", "item58"],
    ["item7", "item15", "item23", "item31", "item39", "item47", "item55", "item63"],
    ["item8", "item16", "item24", "item32", "item40", "item48", "item56", "item64"]
]
// ========================change svg color====================
class chess {
    constructor() {
        mainItems.forEach(e => e.addEventListener('click', () => this.selelctItem(e)), { once: true })
    }
    selelctItem(e) {
        if (!(selectedItem.innerItem || e.innerHTML)) {
        } else {
            if (selectedItem.innerItem && e.style.backgroundColor == 'rgba(207, 207, 10, 0.7)') {
                if (e.innerHTML) {
                    if (e.firstElementChild.outerHTML != selectedItem.innerItem) {
                        e.innerHTML = ''
                        e.insertAdjacentHTML('beforeend', selectedItem.innerItem);
                        ([].slice.call(e.parentElement.children)).filter(par => par.id == selectedItem.id ? par.innerHTML = '' : '')
                        selectedItem = {}
                        this.resetBgColor()
                    }
                } else {
                    e.innerHTML = ''
                    e.insertAdjacentHTML('beforeend', selectedItem.innerItem);
                    ([].slice.call(e.parentElement.children)).filter(par => par.id == selectedItem.id ? par.innerHTML = '' : '')
                    selectedItem = {}
                    this.resetBgColor()
                }
            } else {
                try {
                    this.resetBgColor();
                    selectedItem.innerItem = e.firstElementChild.outerHTML;
                    selectedItem.color = selectedItem.innerItem.split(`"`)[5]
                    selectedItem.id = e.id
                    e.style.backgroundColor = 'rgba(206, 207 ,10, 0.7)';
                    this.availableItems(e)
                } catch (error) {
                }
            }
        }

    }
    changeSvgColor() {
        mainItems.forEach(e => e.id.split('m')[1] >= 49 ? (e.firstChild ? e.firstChild.style.fill = '#000' : '') : (e.firstChild ? e.firstChild.style.fill = '#fff' : ''))
    }
    resetBgColor() {
        mainItems.forEach(e => e.style.backgroundColor = null)
    }
    availableItems(e) {
        if (columnId[0].includes(e.id)) {
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 16 + 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 16 + 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 8 + 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 8 + 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
        }
        else if (columnId[1].includes(e.id)) {
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 16 + 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 16 + 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 16 - 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 16 - 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 8 + 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 8 + 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
        }
        else if (columnId[2].includes(e.id)) {
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 16 + 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 16 + 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 16 - 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 16 - 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 8 - 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 8 - 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
        }
        else if (columnId[3].includes(e.id)) {

            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 16 - 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 16 - 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 8 - 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 8 - 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
        } else {
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 16 + 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 16 + 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 16 - 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 16 - 1 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 8 - 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 8 - 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) - 8 + 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
            ([].slice.call(mainItems)).filter(par => par.id.split('m')[1] == Number(e.id.split('m')[1]) + 8 + 2 ? par.style.backgroundColor = 'rgba(207, 207 ,10, 0.7)' : '');
        }
    }
}
let clChess = new chess
clChess.changeSvgColor()