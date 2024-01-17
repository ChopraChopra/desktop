import * as React from 'react'
import { DialogContent } from '../dialog'
import { Checkbox, CheckboxValue } from '../lib/checkbox'

interface IAccessibilityPreferencesProps {
  readonly underlineLinks: boolean
  readonly onUnderlineLinksChanged: (value: boolean) => void
}

export class Accessibility extends React.Component<
  IAccessibilityPreferencesProps,
  {}
> {
  public constructor(props: IAccessibilityPreferencesProps) {
    super(props)
  }

  public render() {
    return (
      <DialogContent>
        <div className="advanced-section">
          <h2>Accessibility</h2>
          <Checkbox
            label="Underline links"
            value={
              this.props.underlineLinks ? CheckboxValue.On : CheckboxValue.Off
            }
            onChange={this.onUnderlineLinksChanged}
          />
          <p className="git-settings-description">
            When enabled, GitHub Desktop will underline links in commit
            messages, comments, and other text fields. This can help make links
            easier to distinguish. {this.renderExampleLink()}
          </p>
        </div>
      </DialogContent>
    )
  }

  private renderExampleLink() {
    // The example link is rendered with inline style to override the global setting.
    const style = {
      textDecoration: this.props.underlineLinks ? 'underline' : 'none',
    }

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className="link-button-component" style={style}>
        Example Link
      </a>
    )
  }

  private onUnderlineLinksChanged = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    this.props.onUnderlineLinksChanged(event.currentTarget.checked)
  }
}