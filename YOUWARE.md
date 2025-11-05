# Mini O'yin: Nishni Bos

Vanilla HTML/CSS/JavaScript bilan qurilgan oddiy frontend o'yini.

## Loyiha Haqida

- **Turi**: Vanilla HTML/CSS/JavaScript Web Application
- **Entry Point**: `index.html`
- **Framework**: Hech qanday framework kerak emas (Vanilla)
- **Styling**: CSS3 (no build tools needed)

## O'yinning Qoidalari

1. 30 soniyalik vaqt ichida markazda paydo bo'ladigan **nishon (target)** ga bosing
2. Har bir aniqlik bosish **1 ball** qo'shadi
3. Nishon har bosishdan keyin tasodifiy joyda qayta paydo bo'ladi
4. 30 soniya tugagach, **yakuniy ball** ko'rsatiladi
5. "Qayta o'ynash" tugmasi orqali qayta o'ynash mumkin

## Texnologiyalar

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, animations, gradients, flexbox
- **JavaScript (Vanilla)**: Game logic, DOM manipulation, event handling

## Code Architecture

### index.html Structure
```
- HTML Element
  - Styles (inline <style>)
  - Body
    - Container (wrapper)
      - Header
      - Game Container (game field)
    - Script (game logic)
```

### Game State Management
```javascript
gameState = {
    status: 'idle' | 'running' | 'finished',
    score: number,
    timeLeft: number,
    timerId: number (setInterval ID)
}
```

### Key Functions
- `startGame()` - O'yinni boshlash
- `endGame()` - O'yinni yakunlash
- `handleTargetClick()` - Nishon bosilganda
- `getRandomPosition()` - Tasodifiy joy topish
- `updateDisplay()` - Ball va vaqtni yangilash
- `renderMenuScreen()`, `renderGameScreen()`, `renderEndScreen()` - UI render qilish

## Animatsiyalar

- **popIn**: Nishon paydo bo'lishi (0.3s)
- **slideDown**: Header kiritishi (0.6s)
- **slideUp**: Game container kiritishi (0.6s, delayed 0.1s)
- **fadeIn**: Screen almashuvi (0.3s)
- **pulse**: Statsda nuqta miltillashi (2s loop)
- **ping**: Button nuqtasi animatsiyasi

## Performance Optimization

- CSS transitions ijro etish o'rniga `will-change` yoki `transform/opacity` ishlatilmaydi (performance impact minimal)
- Event listeners har safar o'yinni qayta render qilishda boshqalanadi
- `requestAnimationFrame` ishlatilmagan (setInterval 1 soniya uchun yetarli)

## Responsive Design

- Mobile-first approach
- Media query: `max-width: 640px` uchun adjustments
- `clamp()` funksiyasi font va padding o'lchamlarini responsive qiladi

## File Size

- No external dependencies
- Bitta `index.html` file
- Barcha logika va styling o'zida joylashgan (inline)

## Kelajakdagi Takmillamalar

1. localStorage orqali yuqori natijalarni saqlash
2. Sound effects qo'shish
3. Difficulty levels (tezlik va nishon o'lchami)
4. Multiplayer mode

## Ishlatish

```bash
# Faqat index.html ni ochish kifoya:
# Browser orqali: file:///path/to/index.html
# yoki local server orqali: python -m http.server
```
