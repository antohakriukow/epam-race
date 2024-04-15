import { START_LINE_WIDTH } from '../constants';

interface StartAnimationArgs {
  id: string;
  duration: number;
}

class CarAnimation {
  private carElement: HTMLElement | null;

  private trackElement: HTMLElement | null;

  private animationFrameId: number | null;

  private currentX: number;

  constructor() {
    this.carElement = null;
    this.trackElement = null;
    this.animationFrameId = null;
    this.currentX = 0;
  }

  startAnimation({ id, duration }: StartAnimationArgs) {
    this.carElement = document.getElementById(`car-${id}`);
    this.trackElement = document.getElementById(`track-${id}`);
    if (!this.carElement || !this.trackElement) return;

    const distance = this.trackElement.offsetWidth + START_LINE_WIDTH;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (!this.carElement) return;

      const elapsedTime = currentTime - startTime;
      const progress = elapsedTime / (duration * 1000);
      if (progress >= 1) {
        this.stopAnimation();
        this.currentX = distance;
      } else {
        this.currentX = progress * distance;
        this.carElement.style.transform = `translateX(${this.currentX}px)`;
        this.animationFrameId = requestAnimationFrame(animate);
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  stopAnimation() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  resetAnimation() {
    if (this.carElement) {
      this.carElement.style.transform = '';
      this.currentX = 0;
    }
  }
}

export default CarAnimation;
