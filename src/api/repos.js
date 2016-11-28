import * as Const from 'src/const'
import Vue from 'vue'

/*
 *  [
 *    {
 *      "id": 71119883,
 *      "name": "angular-datepicker",
 *      "full_name": "CoderGLM/angular-datepicker",
 *      "owner": {
 *        "login": "CoderGLM",
 *        "id": 13973117,
 *        "avatar_url": "https://avatars.githubusercontent.com/u/13973117?v=3",
 *        "gravatar_id": "",
 *        "url": "https://api.github.com/users/CoderGLM",
 *        "html_url": "https://github.com/CoderGLM",
 *        "followers_url": "https://api.github.com/users/CoderGLM/followers",
 *        "following_url": "https://api.github.com/users/CoderGLM/following{/other_user}",
 *        "gists_url": "https://api.github.com/users/CoderGLM/gists{/gist_id}",
 *        "starred_url": "https://api.github.com/users/CoderGLM/starred{/owner}{/repo}",
 *        "subscriptions_url": "https://api.github.com/users/CoderGLM/subscriptions",
 *        "organizations_url": "https://api.github.com/users/CoderGLM/orgs",
 *        "repos_url": "https://api.github.com/users/CoderGLM/repos",
 *        "events_url": "https://api.github.com/users/CoderGLM/events{/privacy}",
 *        "received_events_url": "https://api.github.com/users/CoderGLM/received_events",
 *        "type": "User",
 *        "site_admin": false
 *      },
 *      "private": false,
 *      "html_url": "https://github.com/CoderGLM/angular-datepicker",
 *      "description": "Angularjs datepicker module, generate a datepicker on your input element -  https://720kb.github.io/angular-datepicker",
 *      "fork": true,
 *      "url": "https://api.github.com/repos/CoderGLM/angular-datepicker",
 *      "forks_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/forks",
 *      "keys_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/keys{/key_id}",
 *      "collaborators_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/collaborators{/collaborator}",
 *      "teams_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/teams",
 *      "hooks_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/hooks",
 *      "issue_events_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/issues/events{/number}",
 *      "events_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/events",
 *      "assignees_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/assignees{/user}",
 *      "branches_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/branches{/branch}",
 *      "tags_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/tags",
 *      "blobs_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/git/blobs{/sha}",
 *      "git_tags_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/git/tags{/sha}",
 *      "git_refs_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/git/refs{/sha}",
 *      "trees_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/git/trees{/sha}",
 *      "statuses_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/statuses/{sha}",
 *      "languages_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/languages",
 *      "stargazers_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/stargazers",
 *      "contributors_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/contributors",
 *      "subscribers_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/subscribers",
 *      "subscription_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/subscription",
 *      "commits_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/commits{/sha}",
 *      "git_commits_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/git/commits{/sha}",
 *      "comments_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/comments{/number}",
 *      "issue_comment_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/issues/comments{/number}",
 *      "contents_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/contents/{+path}",
 *      "compare_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/compare/{base}...{head}",
 *      "merges_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/merges",
 *      "archive_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/{archive_format}{/ref}",
 *      "downloads_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/downloads",
 *      "issues_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/issues{/number}",
 *      "pulls_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/pulls{/number}",
 *      "milestones_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/milestones{/number}",
 *      "notifications_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/notifications{?since,all,participating}",
 *      "labels_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/labels{/name}",
 *      "releases_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/releases{/id}",
 *      "deployments_url": "https://api.github.com/repos/CoderGLM/angular-datepicker/deployments",
 *      "created_at": "2016-10-17T09:08:55Z",
 *      "updated_at": "2016-10-17T09:08:57Z",
 *      "pushed_at": "2016-08-17T11:51:39Z",
 *      "git_url": "git://github.com/CoderGLM/angular-datepicker.git",
 *      "ssh_url": "git@github.com:CoderGLM/angular-datepicker.git",
 *      "clone_url": "https://github.com/CoderGLM/angular-datepicker.git",
 *      "svn_url": "https://github.com/CoderGLM/angular-datepicker",
 *      "homepage": "",
 *      "size": 790,
 *      "stargazers_count": 0,
 *      "watchers_count": 0,
 *      "language": "HTML",
 *      "has_issues": false,
 *      "has_downloads": true,
 *      "has_wiki": true,
 *      "has_pages": false,
 *      "forks_count": 0,
 *      "mirror_url": null,
 *      "open_issues_count": 0,
 *      "forks": 0,
 *      "open_issues": 0,
 *      "watchers": 0,
 *      "default_branch": "master",
 *      "permissions": {
 *        "admin": true,
 *        "push": true,
 *        "pull": true
 *      }
 *    },
 *    ...
 *  ]
 */
function getRepos (token) {
  return new Promise((resolve, reject) => {
    const url = `${Const.getRepos}?access_token=${token}`

    Vue.http.get(url).then(response => response.json()).then(json => {
      console.log(url)
      resolve(json)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  getRepos
}
