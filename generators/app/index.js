var Generator = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

const CLASS_COMPONENT = 'Class Component'
const CLASS_SCENE = 'Class Scene'
const FUNCTIONAL_COMPONENT = 'Functional Component'
const FUNCTIONAL_SCENE = 'Functional Scene'
const CLASS_COMPONENT_TYPE = 'class'
const FUNCTIONAL_COMPONENT_TYPE = 'functional'

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay('Welcome to the ' + chalk.red('OLIO Component Generator') + '! ⚛')
    )

    this.element = await this.prompt([
      {
        type: 'list',
        choices: [FUNCTIONAL_COMPONENT, FUNCTIONAL_SCENE, CLASS_COMPONENT, CLASS_SCENE],
        default: FUNCTIONAL_COMPONENT,
        name: 'type',
        message: 'What type of element would you like to create?',
        required: true,
      },
    ])

    if ([FUNCTIONAL_COMPONENT, CLASS_COMPONENT].includes(this.element.type) === true) {
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

    if ([FUNCTIONAL_SCENE, CLASS_SCENE].includes(this.element.type) === true) {
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
    if ([FUNCTIONAL_COMPONENT, CLASS_COMPONENT].includes(this.element.type) === true) {
      let elements = [
        {
          templatePath: `Components/${getComponentType(this.element.type)}/index.js`,
          destinationPath: `../native/App/Components/${this.answers.componentName}/index.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: `tests/Components/index.js`,
          destinationPath: `../native/tests/unit/App/Components/${this.answers.componentName}/index.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: `Components/${getComponentType(this.element.type)}/Element.js`,
          destinationPath: `../native/App/Components/${this.answers.componentName}/${this.answers.componentName}.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: `tests/Components/Element.js`,
          destinationPath: `../native/tests/unit/App/Components/${this.answers.componentName}/${this.answers.componentName}.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
        {
          templatePath: `Components/${getComponentType(this.element.type)}/styles.js`,
          destinationPath: `../native/App/Components/${this.answers.componentName}/styles.js`,
          data: {
            componentName: this.answers.componentName,
          },
        },
      ]

      if (this.element.type === CLASS_COMPONENT) {
        elements = elements.concat([
          {
            templatePath: `Components/${CLASS_COMPONENT_TYPE}/mapStateToProps.js`,
            destinationPath: `../native/App/Components/${this.answers.componentName}/mapStateToProps.js`,
            data: {
              componentName: this.answers.componentName,
            },
          },
          {
            templatePath: `tests/Components/mapStateToProps.js`,
            destinationPath: `../native/unit/tests/App/Components/${this.answers.componentName}/mapStateToProps.js`,
            data: {
              componentName: this.answers.componentName,
            },
          },
        ])
      }

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
    if ([FUNCTIONAL_SCENE, CLASS_SCENE].includes(this.element.type) === true) {
      const elements = [
        {
          templatePath: `Scenes/${getComponentType(this.element.type)}/index.js`,
          destinationPath: `../native/App/Scenes/${this.answers.sceneName}/index.js`,
          data: {
            sceneName: this.answers.sceneName,
          },
        },
        {
          templatePath: `tests/Scenes/index.js`,
          destinationPath: `../native/tests/unit/App/Scenes/${this.answers.sceneName}/index.js`,
          data: {
            sceneName: this.answers.sceneName,
          },
        },
        {
          templatePath: `Scenes/${getComponentType(this.element.type)}/Element.js`,
          destinationPath: `../native/App/Scenes/${this.answers.sceneName}/${this.answers.sceneName}.js`,
          data: {
            sceneName: this.answers.sceneName,
          },
        },
        {
          templatePath: `tests/Scenes/Element.js`,
          destinationPath: `../native/tests/unit/App/Scenes/${this.answers.sceneName}/${this.answers.sceneName}.js`,
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

const getComponentType = (type) => {
  let componentType = FUNCTIONAL_COMPONENT_TYPE
  if ([CLASS_SCENE, CLASS_COMPONENT].includes(type) === true) {
    componentType = CLASS_COMPONENT_TYPE
  }
  return componentType
}