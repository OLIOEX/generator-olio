var Generator = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

const COMPONENT = 'Components'
const SCENE = 'Scenes'

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay('Welcome to the ' + chalk.red('OLIO Component Generator') + '! ⚛')
    )

    this.element = await this.prompt([
      {
        type: 'list',
        choices: [COMPONENT, SCENE],
        default: COMPONENT,
        name: 'type',
        message: 'What type of element would you like to create?',
        required: true,
      },
    ])

    if (COMPONENT === this.element.type) {
      this.answers = await this.prompt([
        {
          type: 'input',
          name: 'componentName',
          message: 'What is the name of your component?',
          required: true,
        },
        {
          type: 'input',
          name: 'issue',
          message: 'What is the issue number (optional)',
          default: '',
        },
      ])
    }

    if (SCENE === this.element.type) {
      this.answers = await this.prompt([
        {
          type: 'input',
          name: 'sceneName',
          message: 'What is the name of your scene?',
          required: true,
        },
        {
          type: 'input',
          name: 'issue',
          message: 'What is the issue number (optional)',
          default: '',
        },
      ])
    }

    this.log(`creating ${this.element.type} ...`, this.answers.componentName || this.answers.sceneName)
  }

  createComponent() {
    if (COMPONENT === this.element.type) {
      const elements = [
        {
          templatePath: 'Components/index.js',
          destinationPath: `../native/App/Components/${this.answers.componentName}/index.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: 'tests/Components/index.js',
          destinationPath: `../native/tests/App/Components/${this.answers.componentName}/index.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: 'Components/mapStateToProps.js',
          destinationPath: `../native/App/Components/${this.answers.componentName}/mapStateToProps.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: 'tests/Components/mapStateToProps.js',
          destinationPath: `../native/tests/App/Components/${this.answers.componentName}/mapStateToProps.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: `Components/Element.js`,
          destinationPath: `../native/App/Components/${this.answers.componentName}/${this.answers.componentName}.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: `tests/Components/Element.js`,
          destinationPath: `../native/tests/App/Components/${this.answers.componentName}/${this.answers.componentName}.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: 'Components/styles.js',
          destinationPath: `../native/App/Components/${this.answers.componentName}/styles.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
      ]

      elements.forEach((element) => {
        this.fs.copyTpl(
          this.templatePath(element.templatePath),
          this.destinationPath(element.destinationPath),
          element.data
        )
      })
    }

  }

  createScene() {
    if (SCENE === this.element.type) {
      const elements = [
        {
          templatePath: 'Scenes/index.js',
          destinationPath: `../native/App/Scenes/${this.answers.sceneName}/index.js`,
          data: {
            sceneName: this.answers.sceneName,
          },
        },
        {
          templatePath: 'tests/Scenes/index.js',
          destinationPath: `../native/tests/App/Scenes/${this.answers.sceneName}/index.js`,
          data: {
            sceneName: this.answers.sceneName,
          },
        },
        {
          templatePath: `Scenes/Element.js`,
          destinationPath: `../native/App/Scenes/${this.answers.sceneName}/${this.answers.sceneName}.js`,
          data: {
            sceneName: this.answers.sceneName,
          },
        },
        {
          templatePath: `tests/Scenes/Element.js`,
          destinationPath: `../native/tests/App/Scenes/${this.answers.sceneName}/${this.answers.sceneName}.js`,
          data: {
            sceneName: this.answers.sceneName,
          },
        },
      ]

      elements.forEach((element) => {
        this.fs.copyTpl(
          this.templatePath(element.templatePath),
          this.destinationPath(element.destinationPath),
          element.data
        )
      })
    }

  }

  addReleaseNotes() {
    if ('' !== this.answers.issue) {
      this.fs.copyTpl(
        this.templatePath('release-note.yml'),
        this.destinationPath(
          `../native/release_notes/change_log/next/${this.answers.issue}.yml`
        ),
        { issue: this.answers.issue }
      )
    }
  }
}
