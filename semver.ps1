$localReleaseVersion = Get-Content release_version.txt
'Local copy release version: ' + $localReleaseVersion
'Fetching from git....'
git fetch
$var = git tag

'Current version number:     ' + $var[$var.Length-1]
'Enter version numbers'
[int]$major = Read-Host 'Major?'
[int]$minor = Read-Host 'Minor?'
[int]$patch = Read-Host 'Patch?'

$major.ToString() + '.' + $minor + '.' + $patch | Out-File release_version.txt