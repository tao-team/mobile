1. `git pull origin` changes being on a `master` branch
2. checkout to your branch (`feature/31`, `task/31` or just `31`, where '31' is the number of your task)
3. make a dir in a root folder, for example, `mobile/31`, where 'mobile' is a folder of the project
4. develop task in the dir, commit any changes and push them `git push origin -u feature/31` or just `git push origin` if it is not the first push
5. create pull request to the `master` branch on github and merge it solving any conflict if any exists (that would be so strange to see conflicts this way we work)

NOTE: Taking commit take care about files line endings, they should be `\n` for the best compatibility with other systems and to solve any possible problems that can occur with other team members.
