Search chart in repos
```
  helm search repo <chart_name>
  helm search repo -l 
```

Update deps of current chart ./charts - folder with charts, Chart.yaml/dependencies - current deps
```
  helm dependency update
```

Select objects managed by Helm
```
  kubectl get pods -l app.kubernetes.io/managed-by=Helm
```

Helm workflow:
```
  helm install --generate-name . --set ownRegistry.pass=<github_reg_pass>
  helm install <name> . --set ownRegistry.pass=<github_reg_pass>
  helm list
  helm uninstall <name>
```

Argo CD
```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/core-install.yaml

kubectl config set-context --current --namespace=argocd
argocd admin dashboard
argocd <...>
kubectl config set-context --current --namespace=default
```