import React from 'react';

export default class Project extends React.PureComponent {
  name() {
    const {
      project: { name },
      longName,
    } = this.props;
    return longName ? name : name.replace(/^.*\//, '');
  }

  render() {
    const {
      buildStatus,
      activity,
    } = this.props.project;

    return (
      <div className={`project-bar project-${buildStatus.toLowerCase()} project-${activity.toLowerCase()}`}>
        <div className="project-name text-ellipsis">{this.name()}</div>
      </div>
    );
  }
}
