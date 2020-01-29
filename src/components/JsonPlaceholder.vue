<template>
  <div class="page jsonp">
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

    <div class="mt-3">
      <span>Sélectionner un identifiant d'album : </span>
      <select @change="albumSelected" class="album-selector">
        <option v-for="id in albumIds" :key="id" :value="id">{{ id === 0 ? 'Tous les albums' : id }}</option>
      </select>
    </div>

    <div class="mt-5">
      <div
        class="album"
        v-for="photo in photosBundle"
        :key="photo.id"
      >
        <img :src="photo.thumbnailUrl" />
      </div>
    </div>

    <div class="mt-3 mb-5">
      <button
        class="offset-btn mt-4"
        v-bind:class="{ disabled: offset === 0 }"
        @click="previousPage"
      >
        Previous Page
      </button>

      <button
        class="offset-btn mt-4"
        v-bind:class="{ disabled: !hasMore }"
        @click="nextPage"
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
import BreadCrumb from './fragments/BreadCrumb.vue'
import PageTitle from './fragments/PageTitle.vue'

export default {
  name: 'JsonPlaceholder',
  data() {
    return {
      breadCrumb: ['Home', 'JsonPlaceholder'],
      pageTitle: 'JSON Placeholder',
      pageIcon: 'picture_in_picture',
      albumIds: Array.from(Array(20).keys()),
      photos: [],
      selectedId: null,
      offset: 0,
      hasMore: true,
    }
  },
  computed: {
    photosBundle: function() {
      if (!this.selectedId) {
        const photoDisplayed = this.photos.slice(this.offset, this.offset + 12)
        this.hasMore = photoDisplayed.length === 12
        return photoDisplayed
      } else {
        const photoDisplayed = this.photos
          .filter(p => p.albumId === this.selectedId)
          .slice(this.offset, this.offset + 12)
        this.hasMore = photoDisplayed.length === 12
        return photoDisplayed
      }
    }
  },
  methods: {
    async getPhotos() {
      const url = 'https://jsonplaceholder.typicode.com/photos'
      const response = await fetch(url);
      const photos = await response.json();

      this.photos = photos
    },
    albumSelected(e) {
      const selectedId = e.target.selectedIndex;
      this.selectedId = selectedId !== 0 ? selectedId : null;
    },
    previousPage() {
      this.offset = this.offset - 12
    },
    nextPage() {
      this.offset = this.offset + 12
    }
  },
  mounted: function() {
    this.getPhotos();
  },
  components: { BreadCrumb, PageTitle },
}
</script>

<style lang="stylus" scoped>
@import "../theme/ui/colors.styl"

.jsonp

  .album-selector
    background: none
    border: 1px solid $color-fancy-blue
    margin-left: 15px

  .album
    display: inline-block
    height: 150px
    width: 150px

    img
      width: 100%

  .offset-btn
    background: $color-fancy-blue
    border: none
    border-radius: 2px
    color: $color-white
    padding: 5px 10px
    transition: all .25s ease

    &.disabled
      background: rgba($color-fade-blue, .7)
      pointer-events: none

      &:hover
        cursor: not-allowed

    &:hover
      background: $color-dark-blue
</style>
