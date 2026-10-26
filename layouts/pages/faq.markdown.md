{{- $body := partial "markdown-source.md" .RawContent -}}
{{- range .Params.faqs }}{{ $body = printf "%s\n\n## %s\n\n%s" $body .q .a }}{{ end -}}
{{ partial "markdown-page.md" (dict "page" . "body" $body) }}
