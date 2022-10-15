module.exports = {
  icon: function (name, exampleVar) {
    return `<svg class="icon icon--${name} ${exampleVar} " role="img" aria-hidden="true" width="24" height="24">
              <use xlink:href="#svg-${name}"></use>
          </svg>`;
  },
};
