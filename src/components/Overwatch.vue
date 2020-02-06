<template>
  <div class="page overwatch">
    <div class="row">
      <div class="col col-12">
        <BreadCrumb
          class="text-left"
          :items="breadCrumb"
        />
      </div>
    </div>
    <div class="row">
      <div class="col col-12">
        <PageTitle :text="pageTitle" :icon="pageIcon"/>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <div v-if="loading">
          Loading...
        </div>
        <div v-else>
          <div class="d-flex align-items-center mb-3">
            <img class="profile-icon" :src="profile.icon" />
            <h3>{{ profile.name }}</h3>
          </div>
          <div class="group">
            <strong>Level: </strong>
            <div class="ml-2 mr-2">{{ profile.level }}</div>
            <img class="level-icon" :src="profile.levelIcon" />
          </div>
          <div class="group">
            <strong>Prestige: </strong>
            <div class="ml-2 mr-2">{{ profile.prestige }}</div>
            <img class="prestige-icon" :src="profile.prestigeIcon" />
          </div>
          <div class="group">
            <strong>Rating: </strong>
            <div class="ml-2 mr-2">{{ profile.rating }}</div>
            <img class="rating-icon" :src="profile.ratingIcon" />
          </div>

          <div class="mt-5">
            <TopHeroes :stats="profile.competitiveStats.topHeroes" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfile } from '../services/api'
import BreadCrumb from './fragments/BreadCrumb.vue'
import PageTitle from './fragments/PageTitle.vue'
import TopHeroes from './fragments/TopHeroes.vue'

export default {
  name: 'Overwatch',
  data() {
    return {
      breadCrumb: ['Home', 'Overwatch'],
      pageTitle: 'Overwatch',
      pageIcon: 'videogame_asset',
      profile: {},
      loading: true,
    }
  },
  methods: {
    async retrieveProfile() {
      const profile = await getProfile('Mahito-21973')
      this.profile = profile
      this.loading = false
    },
  },
  mounted: function() {
    this.retrieveProfile();
  },
  components: { BreadCrumb, PageTitle, TopHeroes },
}
</script>

<style lang="stylus" scoped>
@import "../theme/ui/colors.styl"

.overwatch

  .profile-icon
    margin-right: 20px
    width: 80px

  .group
    align-items: center
    display: flex
    margin-top: 20px
    position: relative
    width: 130px

    img
      position: absolute
      right: 0

      &.level-icon
        width: 50px

      &.prestige-icon
        top: -6px
        width: 50px

      &.rating-icon
        width: 30px

</style>
