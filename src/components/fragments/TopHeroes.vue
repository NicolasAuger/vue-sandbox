<template>
  <div class="top-heroes">
    <h4>Top Heroes (Time playing)</h4>
    <div class="mt-3">
      <div v-if="loading">
        Loading...
      </div>
      <div v-else>
        <p>
          <strong>Total time played: </strong>
          {{ (totalTimePlayed / 3600).toFixed(2) }} hours
        </p>
        <ul class="list">
          <li v-for="hero in heroes" :key="hero.name">
            <div class="hero-row">
              <img class="hero-icon" :src="hero.icon" />
              <div v-bind:style="{
                background: hero.color,
                height: '60px',
                width: getHeroPlayedTime(hero)
                }">
              </div>
              <p class="hero-name">{{ hero.name }}</p>
              <p class="hero-time">{{ hero.timePlayed }}</p>
              <p class="hero-time-width">{{ getHeroPlayedTime(hero) }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { _heroes } from '../../services/heroes'

  export default {
    props: {
      stats: {
        type: Object,
        required: true,
        default: {},
      }
    },
    data() {
      return {
        heroesData: _heroes,
        heroes: [],
        loading: true
      }
    },
    computed: {
      totalTimePlayed() {
        return Object.values(this.stats).reduce((count, item) => {
          const timePlayed = item.timePlayed.split(':')
          const result = this.getSeconds(timePlayed)
          return count += result
        }, 0)
      },
    },
    methods: {
      sortHeroes() {
        const heroes = [];
        Object.keys(this.stats).forEach(hero => {
          Object.assign(this.stats[hero], this.heroesData[hero])
          const timePlayed = this.stats[hero].timePlayed.split(':')
          const timeInSeconds = this.getSeconds(timePlayed)
          Object.assign(this.stats[hero], { timeInSeconds })
          heroes.push(this.stats[hero])
        })
        this.heroes = this.sortArray(heroes, 'timeInSeconds')
        this.loading = false
      },

      getHeroPlayedTime(hero) {
        const totalWidth = this.heroes.reduce((a, b) => a + b.timeInSeconds, 0)
        const heroWidth = hero.timeInSeconds
        const finalWidth = heroWidth * 100 / (totalWidth !== 0 ? totalWidth : 1)
        return `${finalWidth.toFixed(2)}%`
      },

      getSeconds(timePlayed) {
        let hoursInSeconds = 0
        let minutesInSeconds = 0
        let seconds = 0
        if (timePlayed.length === 3) {
          hoursInSeconds = parseInt(timePlayed[0]) * 3600
          minutesInSeconds = parseInt(timePlayed[1]) * 60
          seconds = parseInt(timePlayed[2])
        } else {
          minutesInSeconds = parseInt(timePlayed[0]) * 60
          seconds = parseInt(timePlayed[1])
        }
        return hoursInSeconds + minutesInSeconds + seconds
      },

      sortArray(tab, k) {
        return tab.sort((a, b) => a[k] < b[k] ? 1 : b[k] < a[k] ? -1 : 0)
      }
    },
    mounted() {
      this.sortHeroes()
    }
  }
</script>

<style lang="stylus" scoped>
.top-heroes

  ul.list
    list-style: none
    padding-left: 0

    .hero-row
      align-items: center
      display: flex
      height: 60px
      background: #1F1E1E

      .hero-icon
        height: 60px
        width: 60px

      .hero-name
        color: #FFF
        font-size: 18px
        left: 150px
        position: absolute
        text-transform: capitalize

      .hero-time
        color: #FFF
        position: absolute
        right: 100px

      .hero-time-width
        color: #FFF
        position: absolute
        right 30px

</style>
