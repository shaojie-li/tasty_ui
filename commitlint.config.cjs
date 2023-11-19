/**
 * git提交规范
 *
 * feat(scope)：新功能
 * update(scope)：更新某功能
 * fix(scope)：修补某功能的bug
 * refactor(scope)：重构某个功能
 * optimize(scope): 优化构建工具或运行时性能
 * style(scope)：仅样式改动
 * docs(scope)：仅文档新增/改动
 * chore(scope)：构建过程或辅助工具的变动
 * perf(scope)：提高性能的代码更改
 * revert(scope)：撤回提交
 * test(scope)：添加或修正测试
 * ci(scop): 执行脚本变更
 */
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "scope-empty": [2, "never"],
        "subject-case": [0, "never"],
        "type-case": [0],
        "type-empty": [0],
        "scope-case": [0],
        "subject-full-stop": [0, "never"],
        "subject-case": [0, "never"],
        "header-max-length": [0, "always", 72],
    },
};
