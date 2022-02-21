import { defineComponent } from 'vue'
import Particle from '../particle'

export default defineComponent({
  name: 'HomePage',
  setup() {
    return () => (
      <section>
        <Particle></Particle>
      </section>
    )
  }
})
