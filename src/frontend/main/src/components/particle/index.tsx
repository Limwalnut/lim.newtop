import { defineComponent, onMounted } from 'vue'
import particle from './ts/particle'

export default defineComponent({
  name: 'ParticleCanvas',
  setup() {
    onMounted(() => {
      particle.initCanvas()
    })

    return () => (
      <div class="main-container">
        <canvas id="canvas"></canvas>
      </div>
    )
  }
})
