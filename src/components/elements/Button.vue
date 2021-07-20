<template>
  <component
    :is="tag"
    v-bind:class="[{ disabled, reversed }, className, 'size-' + size, 'theme-' + theme, type]"
    class="vs-component vs-button"
    :type="submit ? 'submit' : tag === 'button' ? 'button' : null"
    :disabled="disabled"
    v-bind="rest"
    @click="handleClick"
  >
    <slot />
</component>
</template>

<script>
export default {
  props: {
    className: { type: String, default: '' },
    value: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    reversed: { type: Boolean, default: false },
    submit: { type: Boolean, default: false },
    size: { type: String, default: 'default' },
    theme: { type: String, default: 'default' },
    type: { type: String, default: 'default' },
    tag: { default: 'a' },
    onClick: { type: Function, default: () => {} },
    rest: {},
  },
  methods: {
    handleClick(e) {
      if (this.disabled) { return; }
      this.onClick(e);
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../theme/ui/colors.styl"

  applyColors(colors = {})
    &,
    &:visited,
    &.selected,
    &.reversed.selected
      color: colors.textDefault or $color-white
      background: colors.default
      border-color: colors.default

    &:hover,
    &.reversed:hover
      color: colors.textHover or $color-white
      background: colors.hover or (colors.default - 25)
      border-color: colors.hover or (colors.default - 25)

    &:active,
    &.reversed:active
      color: colors.textActive or $color-white
      background: colors.active or (colors.default - 50)
      border-color: colors.active or (colors.default - 50)

    &:focus,
    &.reversed:focus
      color: colors.textFocus or $color-white
      background: colors.focus or colors.default
      border-color: colors.focus or colors.default

    &:disabled, &.disabled
      color: colors.textDisabled or colors.textDefault or $color-white
      background: colors.disabled or rgba(colors.default, .5)
      border-color: colors.disabled or rgba(colors.default, .5)

    &.reversed
      &, &.visited
        border-color: colors.default
        color: colors.default
        background: transparent

      &:disabled, &.disabled
        color: colors.disabled or rgba(colors.default, .5)
        background: transparent
        border-color: colors.disabled or rgba(colors.default, .5)

  .vs-component.vs-button
    display: inline
    padding: 7px 15px
    font-size: 12px
    font-weight: bold
    user-select: none
    background: $color-white
    color: $color-black
    border-radius: 2px
    border: 1px solid transparent
    display: inline-block
    appearance: none
    cursor: default

    for type, colors in $stylings
      &.{type}

        if 'theme-default' in colors
          for themeName, themeColors in colors
            &.{themeName}
              applyColors(themeColors)
        else
          applyColors(colors)

    &:hover
      cursor: pointer

    &.size-big
      padding: 10px 30px
      font-size: 16px

    .icon
      font-size: 16px
      vertical-align: middle
      position: relative
      top: -2px
</style>
