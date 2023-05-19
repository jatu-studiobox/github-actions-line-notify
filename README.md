# Github action to LINE notify
Github action to LINE notify

## Usage
```
- uses: jatu-studiobox/github-actions-line-notify@v1.2.0
  with:
    access_token: ${{ secrets.LINE_NOTIFY_ACCESS_TOKEN }}
    repository_name: ${{ github.event.repository.name }}
    issue_number: ${{ github.event.issue.number }}
    issue_title: ${{ github.event.issue.title }}
    issue_html_url: ${{ github.event.issue.html_url }}
```

## Example
See [example_new_isssue.yml](https://github.com/jatu-studiobox/github-actions-line-notify/blob/main/.github/workflows/example_new_isssue.yml)
