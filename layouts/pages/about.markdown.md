{{- $body := partial "markdown-source.md" .RawContent -}}
{{- $body = printf "%s\n\n## %s" $body .Params.teamTitle -}}
{{- range .Resources.ByType "page" -}}
  {{- $slug := .Params.member -}}
  {{- $body = printf "%s\n\n### %s\n\n%s" $body .Title (partial "markdown-source.md" .RawContent | strings.TrimSpace) -}}
  {{- range hugo.Data.member -}}
    {{- if eq .name $slug -}}
      {{- $links := slice -}}
      {{- range .socials }}{{ $links = $links | append (printf "[%s](%s)" .name .link) }}{{ end -}}
      {{- $body = printf "%s\n\n%s" $body (delimit $links " · ") -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{ partial "markdown-page.md" (dict "page" . "body" $body) }}
